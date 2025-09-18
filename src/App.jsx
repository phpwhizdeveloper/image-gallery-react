import './App.css'
import ThreeDGallery from './components/ThreeDGallery'

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ textAlign: 'center', margin: '8px 0 12px' }}>3D Image Gallery</h1>
      <p style={{ textAlign: 'center', opacity: .8, margin: 0 }}>Hold to pause • Drag to explore • Autoplay resumes</p>
      <ThreeDGallery />
    </div>
  )
}

export default App
