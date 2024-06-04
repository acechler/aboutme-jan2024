# Color Pallete to try

```css
/* Rich Blues Palette */

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header, .footer {
  background: linear-gradient(to right, #08457E, #003153); /* Dark Cerulean to Prussian Blue */
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar {
  background: linear-gradient(to bottom, #367588, #003153); /* Teal Blue to Prussian Blue */
  padding: 1rem;
  width: 200px;
}

.main {
  background: linear-gradient(to top, #0F52BA, #08457E); /* Sapphire Blue to Dark Cerulean */
  padding: 1rem;
  flex: 1;
}

.card-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.card-list > li {
  flex: 1 0 21%; /* Adjust the flex-basis as per requirement */
  margin: 1rem;
}

.card {
  width: 100%;
  min-height: 16rem;
  border-radius: 30px;
  background: #003153; /* Prussian Blue */
  box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.5), -15px -15px 30px rgba(60, 60, 60, 0.5);
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
}

.card:hover {
  background: #003153bd;
}

.card img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.card h2 {
  margin: 1rem 1rem;
}

.card-desc {
  text-align: left;
  line-height: 1.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    order: 2;
  }
  .main {
    order: 1;
  }
  .card-list > li {
    flex: 1 0 100%; /* Full width for mobile */
    margin: 0.5rem 0;
  }
}


```