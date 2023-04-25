const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
//      Confirm we're getting our bread data in the terminal
//   console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            {
                bread.hasGluten
                ? <span>does</span>
                : <span>does not</span>
            }
            have Gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href='/breads'>Go Home</a></li>
      </Default>
    )
}

module.exports = Show
