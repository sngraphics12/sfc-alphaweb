import React, { useState, useEffect } from 'react'
import NavbarComponents from '../Components/NavbarComponents'
import './galary.css'
import FooterComponents from '../Components/FooterComponents'
import galleryData from '../data/galleryData.json'

// Import local images
import business5 from '../assets/images/business 5.jpeg'
import business1 from '../assets/images/Business1.jpeg'
import business2 from '../assets/images/business2.jpeg'
import business3 from '../assets/images/business3.jpeg'
import business4_2 from '../assets/images/business4 (2).jpeg'
import business4 from '../assets/images/business4.jpeg'
import college from '../assets/images/college.avif'

export default function Galary() {
  const [images, setImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [loading, setLoading] = useState(true)


  const imageMap = {
    business5: business5,
    business1: business1,
    business2: business2,
    business3: business3,
    business4_2: business4_2,
    business4: business4,
    college: college
  }


  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const imageData = galleryData.images
        setImages(imageData)
        setFilteredImages(imageData)
      } catch (error) {
        console.error('Error fetching images:', error)
        // Set empty array as fallback
        setImages([])
        setFilteredImages([])
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  // Filter images based on category and year
  useEffect(() => {
    let filtered = images

    if (activeCategory !== 'all') {
      filtered = filtered.filter(img => img.category === activeCategory)
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(img => img.year === selectedYear)
    }

    setFilteredImages(filtered)
  }, [images, activeCategory, selectedYear])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
  }

  return (
    <>
      <div>
        <NavbarComponents />
        
        <header>
          <h1>Gallery</h1>
          <p className="description">
            Explore our collection of memorable moments from various events and activities
          </p>
        </header>

        <div className="tabs">
          <button 
            className={`tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Images
          </button>
          <button 
            className={`tab ${activeCategory === 'orientation' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('orientation')}
          >
            Orientation Program
          </button>
          <button 
            className={`tab ${activeCategory === 'cultural' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('cultural')}
          >
            Cultural Fest
          </button>
          <button 
            className={`tab ${activeCategory === 'tech' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('tech')}
          >
            Tech Workshop
          </button>
          <button 
            className={`tab ${activeCategory === 'sports' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('sports')}
          >
            Sports Week
          </button>
          <button 
            className={`tab ${activeCategory === 'lecture' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('lecture')}
          >
            Guest Lecture
          </button>
        </div>

        <div className="filter-bar">
          <label htmlFor="yearFilter">Filter by Year:</label>
          <select 
            id="yearFilter" 
            value={selectedYear}
            onChange={(e) => handleYearChange(e.target.value)}
          >
            <option value="all">All Years</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        
        <div className="gallery">
          {loading ? (
            <div className="no-images">
              <div className="loading-spinner"></div>
              <p>Loading images...</p>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="no-images">
              <p>No images found for the selected filters.</p>
            </div>
          ) : (
            <>
              <div className="gallery-stats">
                Showing {filteredImages.length} images
              </div>
              {filteredImages.map((image) => (
                <div key={image.id} className="card">
                  <img 
                    src={imageMap[image.src] || image.src} 
                    alt={image.title}
                    className="card-img"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', image.src)
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div style={{ 
                    display: 'none', 
                    padding: '20px', 
                    textAlign: 'center', 
                    backgroundColor: '#f8f9fa',
                    height: '160px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    <p>Image not available</p>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{image.title}</h3>
                    <p className="card-description">{image.description}</p>
                    <span className="card-year">
                      {image.year}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        
        <FooterComponents />
      </div>
    </>
  )
}
