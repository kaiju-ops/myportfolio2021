// File: custom-renderer.js
// Import Highway
import Highway from '@dogstudio/highway';

class CustomRenderer extends Highway.Renderer {
  // Hooks/methods
  // Hooks/methods
  onEnter() {[Locomotive.scrollTo(0, 0)]}
}

// Don`t forget to export your renderer
export default CustomRenderer;