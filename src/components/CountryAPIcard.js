import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryInfo } from "../store/countrypage/countryAPI/actions";
import { selectCountryInfo } from "../store/countrypage/countryAPI/selector";

export default function CountryAPIcard(props) {
  const dispatch = useDispatch();
  const info = useSelector(selectCountryInfo);
  const { name } = props;

  useEffect(() => {
    dispatch(fetchCountryInfo(name));
  }, [name]);

  console.log("CORRECT INFO?", info);
  return (
    <div>
      <h2>Hello I am the countryAPIcard</h2>
      <div>
        <h2>{info.name} general country info</h2>
        <span>
          <p>Capital: {info.capital}</p>
          <p>Population: {info.population}</p>
          <p>
            {info.name} is located in {info.subregion}
          </p>
          <p>
            {info.name} has the timezone(s): {info.timezones}
          </p>
          <p>Their national callingCode is: +{info.callingCodes}</p>
        </span>
      </div>
    </div>
  );
}