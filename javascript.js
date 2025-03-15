document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("login-page").style.display = "block";
    }, 3000);

    const users = [
        { username: "1", 
          password: "1", 
          imageSrc: "charan.jpg",
          fullName: "Vasantha Sri Charan",
          phone: "+91 9866949442",
        },
        { username: "siddu", 
          password: "23A91A0410", 
          imageSrc: "sidduroy.jpg",
          fullName: "Bobili Gowtham Siddu Roy",
          phone: "+91 ", 
        },
        { username: "syam", 
          password: "23A91A0449", 
          imageSrc: "syam.jpg",
          fullName: "P Chiranjeevi Syam",
          phone: "+91 ",
        },
        { username: "lakshman", 
          password: "23A91A0455", 
          imageSrc: "lakshman.jpg",
          fullName: "Rongali lakshman",
          phone: "+91 9866949442",
        },
        { username: "santhosh", 
          password: "23A91A0461", 
          imageSrc: "santhosh.jpg",
          phone: "+91 9866949442", 
      },
        { username: "gowtham", 
        password: "23A91A0432", 
        imageSrc: "gowtham.jpg",
        phone: "+91 9866949442",  
        },
    ];

    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            document.getElementById("login-page").style.display = "none";
             document.getElementById("details-page").style.display = "block";


            const loginImg = document.getElementById("loginImg");
            if (loginImg) {
                loginImg.style.display ="none";
            }
             
            document.getElementById("user-name").innerText = validUser.username;
            document.getElementById("full-name").innerText = validUser.fullName;
            document.getElementById("email").innerText = validUser.email;
            document.getElementById("age").innerText = validUser.age;
            document.getElementById("phone").innerText = validUser.phone;
            document.getElementById("address").innerText = validUser.address;
            document.getElementById("occupation").innerText = validUser.occupation;
            document.getElementById("hobbies").innerText = validUser.hobbies.join(", ");
            document.getElementById("bio").innerText = validUser.bio;
            

            document.getElementById("details-page").style.display = "block";
            document.getElementById("user-name").innerText = username;

            const profileImg = document.getElementById("profile-img");
            profileImg.src = validUser.imageSrc; 
            profileImg.style.display = "block"; 
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
