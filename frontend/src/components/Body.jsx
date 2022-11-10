import React from 'react';
import SelectForecast from './SelectForecast.jsx';

function Body() {
  return (
      <div id='main-body'>
        <SelectForecast />
        <h3>This is a sub-title</h3>
        <p>
          This is a paragraph. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quibusdam, iste vitae! Sapiente doloremque vel
          officia, sint alias ad at architecto sequi esse saepe laudantium
          mollitia sunt qui, non commodi sit?
        </p>
        <br />
        <h3>This is a second sub-title</h3>
        <p>
          This is a paragraph. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis accusantium labore minima necessitatibus
          suscipit reprehenderit ab, enim incidunt vero pariatur, quam obcaecati
          laudantium deleniti officiis, rerum architecto. Optio, necessitatibus
          similique?
        </p>
      </div>
  );
}

export default Body;
