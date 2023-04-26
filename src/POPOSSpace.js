import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address } = props
    return (
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300px"
          height="300px"
          alt="Property Images"
        />
        <h1>{name}</h1>
        <div>{address}</div>
      </div>
    )
  }

export default POPOSSpace