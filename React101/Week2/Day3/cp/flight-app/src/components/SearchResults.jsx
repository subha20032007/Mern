import  './style.css'
const SearchResults = (props) => {
let arr =props.props

 console.log(arr)
      return (
          <table className="flight-table" >
            {/* add columnsheadings */}
            <thead>
            <tr>
              <th>departure</th>
              <th>duration</th>
              <th>arrival</th>
              <th>price</th>
            </tr>
            
            </thead>
            <tbody data-testid="flight-results">{
             arr.map((el,i)=>(
             <tr key={i}>
              <td>{el.departure}</td>
              <td>{el.duration}</td>
              <td>{el.arrival}</td>
              <td>{el.price}</td>
             </tr>
              ) )
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  