import {useState, useEffect} from 'react';
import masonstoops from './assets/masonstoops.png';
//import mason from './assets/mason.png';
import gumby from './assets/gumby.png';
import acousticMason from './assets/acousticMason.png';
import masonAndTaylor from './assets/masonAndTaylor.png';
import maxresdefault from './assets/maxresdefault.jpg';
import teleMason from './assets/teleMason.jpeg';
import weirdTeleMason from './assets/weirdTeleMason.png';
import DSC_0147 from './assets/DSC_0147.jpg';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './App.css';

function App() {
  const [isPressed, setIsPressed] = useState('home');
  const [sorted, setSorted] = useState('year(newestToOldest)');
  const [streamingService, setStreamingService] = useState('spotify');
  const [spotifyUnderline, setSpotifyUnderline] = useState('underline');
  const [appleMusicUnderline, setAppleMusicUnderline] = useState('none');
  const [tidalUnderline, setTidalUnderline] = useState('none');

  const credits = 
  [
    {
      id: 1, 
      artist: 'Katy Perry', 
      album: 'All You Need Is Love',
      label: 'Capitol Records', 
      year: 2021, 
      spotify: 'https://open.spotify.com/embed/track/4yyHCYD1ZmeIXEEbvLjCqh?utm_source=generator&theme=0',
      appleMusic: 'https://embed.music.apple.com/us/album/all-you-need-is-love-single/1590949989'
    },
    {
      id: 2, 
      artist: 'girlpuppy',        
      album: 'Swan', 
      label: 'Royal Mountain Records', 
      year: 2021, 
      spotify: 'https://open.spotify.com/embed/album/0NdaowHMJFJVu3HRNMdUcF?utm_source=generator',
      appleMusic: ''
    },
    {
      id: 3, 
      artist: 'Luke Sital-Singh', 
      album: 'Dressing Like a Stranger', 
      label: 'Nettwerk Music Group', 
      year: 2022, 
      spotify: 'https://open.spotify.com/embed/album/0HljuthA58AYgljjo9W0rv?utm_source=generator',
      appleMusic: ''
    },
    {
      id: 4, 
      artist: 'Vulfmon', 
      album: 'Boogie Man', 
      label: 'Vulf Records', 
      year: 2022, 
      spotify: 'https://open.spotify.com/embed/track/7k3n3Zfi42GZ7rCbt0OJl6?utm_source=generator',
      appleMusic: ''
    },
    {
      id: 5, 
      artist: 'Cat Clyde', 
      album: 'Down Rounder', 
      label: 'SecondPrize Records', 
      year: 2023, 
      spotify: 'https://open.spotify.com/embed/album/2oxTJw5q7KQZYxXipOCoa8?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 6, 
      artist: 'Del Water Gap', 
      album: 'All We Ever Do Is Talk', 
      label: 'Mom + Pop Music', 
      year: 2023, 
      spotify: 'https://open.spotify.com/embed/album/6iXKJVVucUkEKFiGDqyPgM?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 7, 
      artist: 'Ryan Beatty',
      album: 'Calico',
      label: 'Elektra Records, Atlantic Records',
      year: 2023, 
      spotify: 'https://open.spotify.com/embed/album/5OWpskyoZl9UMkHQwgA05O?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 8, 
      artist: 'Luke Hemmings', 
      album: 'Boy', 
      label: 'Artista Records, Sony Music', 
      year: 2024, 
      spotify: 'https://open.spotify.com/embed/album/3Ry4DmajssDWHmThH2KseJ?utm_source=generator',
      appleMusic: 'https://embed.music.apple.com/us/album/boy/1730783666',
      tidal: 'https://embed.tidal.com/albums/357715087'
    },
    {
      id: 9, 
      artist: 'Lizzy McAlpine', 
      album: 'Older', 
      label: 'RCA Records', 
      year: 2024, 
      spotify: 'https://open.spotify.com/embed/album/0jw9gOg8M1Ve6KpP4Iu7XF?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 10,
      artist: 'Barns Courtney',
      album: 'Machine Gun Sun',
      label: 'Avenue A Records',
      year: 2024,
      spotify: 'https://open.spotify.com/embed/track/6vK6s0a2DQGspBEn3ziYDm?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 11,
      artist: 'Katie Gavin',
      album: 'What A Relief',
      label: 'Saddest Factory Records',
      year: 2024,
      spotify: 'https://open.spotify.com/embed/album/63ZainyDDxb0MQ73Q8IyXZ?utm_source=generator',
      appleMusic: '',
      tidal: ''
    },
    {
      id: 12,
      artist: 'Matt Champion',
      album: `Mika's Laundry`,
      label: 'RCA Records',
      year: 2024,
      spotify: 'https://open.spotify.com/embed/album/66VRqzJ2YSL0eqcz385eZq?utm_source=generator',
      appleMusic: '',
      tidal: ''
    }
  ]
  const videos = 
  [
    {
      id: 1,
      title: 'Mason Stoops & Adam Levy | Things We Said Today | AEA Sessions',
      link: 'https://www.youtube.com/embed/AObLW_yzZs8?si=VjZY-LBKSscMNzTy'
    },
    {
      id: 2,
      title: `Mason Stoops' Touring Rig with Marcus Mumford | Fretboard Journal`,
      link: 'https://www.youtube.com/embed/TH-bixpr-EQ?si=eR1L-YARDo9fRN1w'
    },
    {
      id: 3,
      title: 'Mason Stoops | PickUp Show Los Angeles',
      link: 'https://www.youtube.com/embed/yFw1d7MC5yI?si=cQ6t6MrHGjfUC97x'
    }
  ];
  const photos = [
    {
      original: acousticMason,
      thumbnail: acousticMason
    },
    {
      original: masonAndTaylor,
      thumbnail: masonAndTaylor
    },
    {
      original: maxresdefault,
      thumbnail: maxresdefault
    },
    {
      original: teleMason,
      thumbnail: teleMason
    },
    {
      original: weirdTeleMason,
      thumbnail: weirdTeleMason
    },
    {
      original: DSC_0147,
      thumbnail: DSC_0147
    }
  ]

  const creditsSorted = credits.sort((a, b) => {
    if (sorted === 'artist') {
    return a.artist.localeCompare(b.artist);
    } else if (sorted === 'album') {
      return a.album.localeCompare(b.album);
    } else if (sorted ==='label') {
      return a.label.localeCompare(b.label);
    } else if (sorted === 'year(oldestToNewest)') {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0
    } else if (sorted === 'year(newestToOldest)') {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      return 0
    }
  }) 
 

  const creditsMap = credits.map(c => {
    if (streamingService === 'spotify') {
    return (
      <div className='creditCard' key={c.id}>
        <h2>{c.artist}</h2>
        <p>{c.album}</p>
        <p>{c.label}</p>
        <p>{c.year}</p>
        <iframe title={c.id} style={{borderRadius: '12px'}} src={c.spotify} width='100%' height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    )
  } else if (streamingService === 'apple music') {
    return (
      <div className='creditCard' key={c.id}>
        <h2>{c.artist}</h2>
        <p>{c.album}</p>
        <p>{c.label}</p>
        <p>{c.year}</p>
        <iframe title={c.id} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style={{borderRadius: '10px'}} width='100%' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={c.appleMusic}></iframe>
      </div>
    )
  } else if (streamingService === 'tidal') {
    return (
      <div className='creditCard' key={c.id}>
        <h2>{c.artist}</h2>
        <p>{c.album}</p>
        <p>{c.label}</p>
        <p>{c.year}</p>
        <iframe src={c.tidal} style={{borderRadius: '10px'}} width="100%" height="300" allow="encrypted-media" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player" />
      </div>
    )
  }
  })

  const videosMap = videos.map(v => {
    return (
      <div className='videoCard' key={v.id}>
        <h2>{v.title}</h2>
        <iframe style={{borderRadius: '10px'}} width='560' height="315" src={v.link} title={v.id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    )
  })

  function handleChange(value) {
    setSorted(value);
  }

  const handleClick = (event) => {
    const htmlContent = event.target.innerHTML.toLowerCase();
    setIsPressed(htmlContent);  
  };

  function goHome() {
    setIsPressed('home');
  }

  useEffect(() => {
    
    
  }, [isPressed]);
 
  function handleStreamingService(event) {
    const htmlContent = event.target.innerHTML.toLowerCase();
    setStreamingService(htmlContent);
    
  }

  useEffect(() => {
    if (streamingService === 'spotify') {
      setSpotifyUnderline('underline');
      setAppleMusicUnderline('none');
      setTidalUnderline('none');
    } else if (streamingService === 'apple music') {
      setSpotifyUnderline('none');
      setAppleMusicUnderline('underline');
      setTidalUnderline('none');
    } else if (streamingService === 'tidal') {
      setSpotifyUnderline('none');
      setAppleMusicUnderline('none');
      setTidalUnderline('underline');
    }
  }, [streamingService]); 

  

  function Home() {
    return (
      <div className='container'>
      <div className='headerContainer'>
      <div className='line1'></div>
      <img src={masonstoops} className='masonStoops' alt='Mason Stoops' onClick={goHome}/>
      <div className='line2'></div>
      <div className='skewedCircle'>
        <img src={gumby} className='gumby' alt='gumby'/>
      </div>
      <div className='line3'></div>
      <div className='subContainer'>
          <h6>PRODUCT OF ORANGE COUNTY CAL., SESSION AND TOURING GUITARIST</h6>
        </div>
        <div className='optionContainer'>
          <h3 style={{textDecoration: 'underline'}} onClick={handleClick}>HOME</h3> 
          <h3 onClick={handleClick}>ABOUT</h3> 
          <h3 onClick={handleClick}>CREDITS</h3>
          <h3 onClick={handleClick}>VIDEOS</h3>
          <h3 onClick={handleClick}>CONTACT</h3>
          <a href='https://www.instagram.com/masonstoops/'>
          <div className='instaLogoContainer'>
            <div className='instaLogoOuter'>
              <div className='instaLogoDot'></div>
              <div className='instaLogoInner'></div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='bodyContainer'>
        <div className='galleryContainer'>
          <ImageGallery autoPlay={true} thumbnailPosition='right'  slideInterval={5000} items={photos}/>
          </div>
      </div>
    </div>
    )
  }
  function About() {
    return (
      <div className='container'>
      <div className='headerContainer'>
      <div className='line1'></div>
      <img src={masonstoops} className='masonStoops' alt='Mason Stoops' onClick={goHome}/>
      <div className='line2'></div>
      <div className='skewedCircle'>
        <img src={gumby} className='gumby' alt='gumby'/>
      </div>
      <div className='line3'></div>
      <div className='subContainer'>
          <h6>PRODUCT OF ORANGE COUNTY CAL., SESSION AND TOURING GUITARIST</h6>
        </div>
        <div className='optionContainer'>
          <h3 onClick={handleClick}>HOME</h3> 
          <h3 style={{textDecoration: 'underline'}} onClick={handleClick}>ABOUT</h3> 
          <h3 onClick={handleClick}>CREDITS</h3>
          <h3 onClick={handleClick}>VIDEOS</h3>
          <h3 onClick={handleClick}>CONTACT</h3>
          <a href='https://www.instagram.com/masonstoops/'>
          <div className='instaLogoContainer'>
            <div className='instaLogoOuter'>
              <div className='instaLogoDot'></div>
              <div className='instaLogoInner'></div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='bodyContainer'>
        <div className='bioContainer'>
          <p>Mason Stoops is an LA-based session and touring guitarist known for his thorough knowledge of historical and contemporary instruments and effects. He's much more than a gear aficionado though – Mason is a fiercely talented player in his own right. He's a staple in the Los Angeles music scene and has worked with a wide array of leading artists ranging from Katy Perry to Jackson Browne.</p>
          </div>
          {/* <img src={mason} className='mason' alt='mason'></img> */}
      </div>
    </div>
    )
  }
  function Credits() {
    return (
      <div className='container'>
      <div className='headerContainer'>
      <div className='line1'></div>
      <img src={masonstoops} className='masonStoops' alt='Mason Stoops' onClick={goHome}/>
      <div className='line2'></div>
      <div className='skewedCircle'>
        <img src={gumby} className='gumby' alt='gumby'/>
      </div>
      <div className='line3'></div>
      <div className='subContainer'>
          <h6>PRODUCT OF ORANGE COUNTY CAL., SESSION AND TOURING GUITARIST</h6>
        </div>
        <div className='optionContainer'>
          <h3 onClick={handleClick}>HOME</h3> 
          <h3 onClick={handleClick}>ABOUT</h3> 
          <h3 style={{textDecoration: 'underline'}} onClick={handleClick}>CREDITS</h3>
          <h3 onClick={handleClick}>VIDEOS</h3>
          <h3 onClick={handleClick}>CONTACT</h3>
          <a href='https://www.instagram.com/masonstoops/'>
          <div className='instaLogoContainer'>
            <div className='instaLogoOuter'>
              <div className='instaLogoDot'></div>
              <div className='instaLogoInner'></div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='bodyContainer'>
        <div className='streamingContainer'>
        <div className='spotify' onClick={handleStreamingService}><h4 style={{textDecoration: spotifyUnderline}}>Spotify</h4></div> 
        <div className='appleMusic' onClick={handleStreamingService}><h4 style={{textDecoration: appleMusicUnderline}}>Apple Music</h4></div>
        <div className='tidal' onClick={handleStreamingService}><h4 style={{textDecoration: tidalUnderline}}>Tidal</h4></div>
        </div>
        <div>
        <label style={{marginLeft: '5%'}} htmlFor='sort'>Sort By:</label>
        <select id='sort' value={sorted} onChange={(e) => handleChange(e.target.value)}>
          <option value='artist'>Artist</option>
          <option value='album'>Album</option>
          <option value='label'>Record Label</option>
          <option value='year(oldestToNewest)'>Year (Oldest to Most Recent)</option>
          <option value='year(newestToOldest)'>Year (Most Recent to Oldest)</option>
        </select>
        </div>
        {creditsMap};
          {/* <img src={mason} className='mason' alt='mason'></img> */}
      </div>
    </div>
    )
  }
  function Videos() {
    return (
      <div className='container'>
      <div className='headerContainer'>
      <div className='line1'></div>
      <img src={masonstoops} className='masonStoops' alt='Mason Stoops' onClick={goHome}/>
      <div className='line2'></div>
      <div className='skewedCircle'>
        <img src={gumby} className='gumby' alt='gumby'/>
      </div>
      <div className='line3'></div>
      <div className='subContainer'>
          <h6>PRODUCT OF ORANGE COUNTY CAL., SESSION AND TOURING GUITARIST</h6>
        </div>
        <div className='optionContainer'>
          <h3 onClick={handleClick}>HOME</h3> 
          <h3 onClick={handleClick}>ABOUT</h3> 
          <h3 onClick={handleClick}>CREDITS</h3>
          <h3 style={{textDecoration: 'underline'}} onClick={handleClick}>VIDEOS</h3>
          <h3 onClick={handleClick}>CONTACT</h3>
          <a href='https://www.instagram.com/masonstoops/'>
          <div className='instaLogoContainer'>
            <div className='instaLogoOuter'>
              <div className='instaLogoDot'></div>
              <div className='instaLogoInner'></div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='bodyContainer'>
        <div className='videContainer'>
          {videosMap};
        </div>
          {/* <img src={mason} className='mason' alt='mason'></img> */}
      </div>
    </div>
    )
  }
  function Contact() {
    return (
      <div className='container'>
      <div className='headerContainer'>
      <div className='line1'></div>
      <img src={masonstoops} className='masonStoops' alt='Mason Stoops' onClick={goHome}/>
      <div className='line2'></div>
      <div className='skewedCircle'>
        <img src={gumby} className='gumby' alt='gumby'/>
      </div>
      <div className='line3'></div>
      <div className='subContainer'>
          <h6>PRODUCT OF ORANGE COUNTY CAL., SESSION AND TOURING GUITARIST</h6>
        </div>
        <div className='optionContainer'>
          <h3 onClick={handleClick}>HOME</h3> 
          <h3 onClick={handleClick}>ABOUT</h3> 
          <h3 onClick={handleClick}>CREDITS</h3>
          <h3 onClick={handleClick}>VIDEOS</h3>
          <h3 style={{textDecoration: 'underline'}} onClick={handleClick}>CONTACT</h3>
          <a href='https://www.instagram.com/masonstoops/'>
          <div className='instaLogoContainer'>
            <div className='instaLogoOuter'>
              <div className='instaLogoDot'></div>
              <div className='instaLogoInner'></div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='bodyContainer'>
        <div className='contactContainer'>
            <form>
              <h1>Contact</h1>
              <div style={{width: '50%', justifySelf: 'center'}}>
              <p>Get in touch with Mason to schedule a session, or for any other inquiries.</p>
              </div>
              <label htmlFor='firstName'>First Name:</label>
              <input type='text' id='firstName'></input> <br></br>
              <label htmlFor='lastName'>Last Name:</label>
              <input type='text' id='lastName'></input> <br></br>
              <label htmlFor='Email'>Email:</label>
              <input type='text' id='email'></input> <br></br>
              <label htmlFor='message'>Message:</label>
              <input type='text' id='message' style={{padding: '20%'}}></input> <br></br>
            </form>
        </div>
      </div>
    </div>
    )
  }
 
  if (isPressed === 'home') {
    return <Home></Home>
  } else if (isPressed === 'about') {
    return <About></About>
  } else if (isPressed === 'credits') {
    return <Credits></Credits>
  } else if (isPressed === 'videos') {
    return <Videos></Videos>
  } else if (isPressed === 'contact') {
    return <Contact></Contact>
  }
}

export default App;
