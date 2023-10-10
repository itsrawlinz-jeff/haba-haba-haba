export async function GET(request) {
    let users = [
      {
        id: 1,
        name: "Praveen",
        email: "praveen@trickuweb.com",
        country: "Kenya",
        phoneNumber: "+254740504432",
        dateOfBirth: "11-12-09",
        gender:"female"
      },
      {
        id: 2,
        name: "Nitin",
        email: "nitin@trickuweb.com",
        country: "Kenya",
        phoneNumber: "+254740504431",
        dateOfBirth: "11-12-08",
        gender:"male"
      },
    ];
  
    let data = JSON.stringify(users);
    return new Response(data, {
      status: 200,
    });
  }