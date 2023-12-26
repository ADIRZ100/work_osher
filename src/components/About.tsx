import React from 'react';
import owner from './images/owner.jpeg';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <div className="container">
      <img src={owner} alt="owner" style={{ width: '500px', height: 'auto' }} />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p style={{ fontFamily: 'YourDesiredFont', fontSize: '1.2rem', lineHeight: '1.6' }}>
            שלום,
            <br /><br />
            אני אושר מאלעד, מעצבת שיער בעלת ניסיון רב ועין חדה לסגנונות הטרנדים האחרונים. הסלון שלי הוא מקום של יופי, רוגע וחוויה ייחודית.
            <br /><br />
            אשמח לארח אותך לחוויה מיוחדת של תספורת ועיצוב שיער מתקדם. אני מתמחה בתספורות בינוניות וקצרות, ואני כמובן כאן כדי להפוך כל ײשוב שלך למציאות.
            <br /><br />
            נשמע מעולה? אני זמינה לשאלות, תיאום פגישה ולכל שאלה שתהיה לך. אשמח לקבל אותך בסטודיו שלי!
            <br /><br />
            בברכה,
            <br />
</p>
          {/* <p>
            I am John Doe, a senior advisor for an independently owned
            financial planning company called Intense.
          </p>
          <button className="button">Explore More</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
