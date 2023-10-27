/* eslint-disable react/prop-types */


const SingleUser = ({user,}) => {
  return (
      <div className="single-user">
          <div className="user-image">
              <img src={user.picture.large}  alt="" />
          </div>
          <div className="user-info">
              <h3>{user.name.first} {user.name.last}</h3>
              <p className="user-mail">Email: {user.email}</p>
              <p className="user-location">Location: {user.location.country} | {user.location.city}</p>
          </div>
      </div>
  )
}

export default SingleUser