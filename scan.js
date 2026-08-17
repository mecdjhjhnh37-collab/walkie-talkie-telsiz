const video = document.getElementById("camera");
const status = document.getElementById("status");


async function openCamera(){

    try {

        const stream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: {
                    exact: "environment"
                }
            },

            audio:false

        });


        video.srcObject = stream;

        status.innerText = "الكاميرا الخلفية تعمل ✅";


    } catch(error){

        status.innerText = "لم يتم فتح الكاميرا";

        console.log(error);

    }

}


openCamera();
