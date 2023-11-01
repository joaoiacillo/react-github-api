import PropTypes from "prop-types";

export const RecentSearches = ({ list, getUserData }) => {
  return (
    <div className="recent-searches">
      <h4>Recent searches</h4>
      <ul>
        {list.map((value, index) => (
          <li key={index} onClick={() => getUserData(value)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

RecentSearches.propTypes = {
  list: PropTypes.array,
  getUserData: PropTypes.func,
};
