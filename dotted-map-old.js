class DottedMap {
  constructor(container, options = {}) {
    this.container = container;
    this.markers = options.markers || [];
    this.dotSize = options.dotSize || 2;
    this.dotColor = options.dotColor || '#5a6fff';
    this.markerColor = options.markerColor || '#5fe1a5';
    this.lineColor = options.lineColor || 'rgba(90, 111, 255, 0.3)';
    
    this.init();
  }

  init() {
    this.createCanvas();
    this.resizeCanvas();
    this.drawMap();
    this.animateMarkers();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.drawMap();
    });
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }

  resizeCanvas() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  drawMap() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    // Clear canvas
    this.ctx.clearRect(0, 0, width, height);
    
    // Draw grid dots
    const spacing = 20;
    for (let x = spacing; x < width; x += spacing) {
      for (let y = spacing; y < height; y += spacing) {
        this.ctx.fillStyle = this.dotColor;
        this.ctx.globalAlpha = 0.3;
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.dotSize, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    
    // Draw connections between markers
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = 1;
    this.ctx.globalAlpha = 0.5;
    
    for (let i = 0; i < this.markers.length - 1; i++) {
      const marker1 = this.markers[i];
      const marker2 = this.markers[i + 1];
      
      const x1 = this.latLngToX(marker1.lat, marker1.lng);
      const y1 = this.latLngToY(marker1.lat, marker1.lng);
      const x2 = this.latLngToX(marker2.lat, marker2.lng);
      const y2 = this.latLngToY(marker2.lat, marker2.lng);
      
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
    
    // Draw markers
    this.markers.forEach((marker, index) => {
      const x = this.latLngToX(marker.lat, marker.lng);
      const y = this.latLngToY(marker.lat, marker.lng);
      
      // Marker glow effect
      const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, marker.size * 30);
      gradient.addColorStop(0, this.markerColor);
      gradient.addColorStop(1, 'transparent');
      
      this.ctx.fillStyle = gradient;
      this.ctx.globalAlpha = 0.3;
      this.ctx.beginPath();
      this.ctx.arc(x, y, marker.size * 30, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Marker dot
      this.ctx.fillStyle = this.markerColor;
      this.ctx.globalAlpha = 1;
      this.ctx.beginPath();
      this.ctx.arc(x, y, marker.size * 10, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  latLngToX(lat, lng) {
    const width = this.canvas.width;
    return ((lng + 180) / 360) * width;
  }

  latLngToY(lat, lng) {
    const height = this.canvas.height;
    return ((90 - lat) / 180) * height;
  }

  animateMarkers() {
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Redraw map with animated markers
      this.drawMap();
      
      // Add pulsing effect to markers
      this.markers.forEach((marker, index) => {
        const x = this.latLngToX(marker.lat, marker.lng);
        const y = this.latLngToY(marker.lat, marker.lng);
        
        const pulseSize = marker.size * 10 + Math.sin(time * 2 + index) * 2;
        
        this.ctx.strokeStyle = this.markerColor;
        this.ctx.globalAlpha = 0.5 - Math.sin(time * 2 + index) * 0.3;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, pulseSize + 5, 0, Math.PI * 2);
        this.ctx.stroke();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }
}

// Initialize DottedMap when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const dottedMapContainer = document.getElementById('dotted-map');
  if (dottedMapContainer) {
    console.log('DottedMap container found, initializing...');
    
    const markers = [
      { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
      { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
      { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
      { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
      { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
      { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
      { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
      { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
      { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
      { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
      { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
      { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
      { lat: 52.52, lng: 13.405, size: 0.3 }, // Berlin
      { lat: 19.4326, lng: -99.1332, size: 0.3 }, // Mexico City
      { lat: -26.2041, lng: 28.0473, size: 0.3 }, // Johannesburg
    ];

    try {
      new DottedMap(dottedMapContainer, {
        markers: markers,
        dotColor: '#5a6fff',
        markerColor: '#5fe1a5',
        lineColor: 'rgba(90, 111, 255, 0.3)'
      });
      console.log('DottedMap initialized successfully');
    } catch (error) {
      console.error('Error initializing DottedMap:', error);
    }
  } else {
    console.warn('DottedMap container not found');
  }
});

// Also try to initialize after window load in case DOMContentLoaded was missed
window.addEventListener('load', function() {
  const dottedMapContainer = document.getElementById('dotted-map');
  if (dottedMapContainer && !dottedMapContainer.hasChildNodes()) {
    console.log('Retrying DottedMap initialization...');
    // Re-initialize if container exists but is empty
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  }
});
