export function MainInfoRight({ filmInfo }) {
  return (
    <div className="main__info-right">
      <p>About</p>
      <div className="main__info-rigth-info">
        <div>
          <p>Type:</p>
          <p>{filmInfo.aboutInfo[0]}</p>
        </div>
        <div>
          <p>Director:</p>
          <p>{filmInfo.aboutInfo[1]}</p>
        </div>
        <div>
          <p>Date aired:</p>
          <p>{filmInfo.aboutInfo[2]}</p>
        </div>
        <div>
          <p>Duration:</p>
          <p>{filmInfo.aboutInfo[3]} min</p>
        </div>
      </div>
    </div>
  );
}
