import React from 'react';

function Gallery() {
  const [data, setData] = React.useState(null);
  React.useEffect(() =>{
    fetch('https://pixabay.com/api/?key=28501269-85beb46cbb93172460c9f97d2&q=yellow+flowers&image_type=photo&pretty=true')
    .then((res) => res.json())
    .then( (data) => {
      setData(data.hits);
      console.log(data);
    });
  });
  
  return (
    <div className="App">
      <div>
      {data.map(x => <img className='cardImg' src={x.largeImageURL} alt={x.largeImageURL} key={x.largeImageURL}></img>)}
      </div>
</div>
  );
}

 export default Gallery;