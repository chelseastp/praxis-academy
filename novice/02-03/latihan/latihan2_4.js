let meetup = {name:'How to be Raisa',isActive:true,members:500};
const scheduleMeetup = (date, place) => {
  meetup.date = date;
  meetup.place = place;
  if (meetup.members < 50)
    meetup.isActive = false;
}
const publishMeetup = () => {
  if (meetup.isActive) {
    meetup.publish = true;
  }
}
scheduleMeetup('Kemaren','Rumahku');
publishMeetup();
console.log(meetup);