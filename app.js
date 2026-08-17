const camera = document.getElementById("camera");
const statusText = document.getElementById("status");
const qrBox = document.getElementById("qrBox");

function createRoom() {
    statusText.innerText = "الحالة: تم إنشاء غرفة انتظار";
    
    qrBox.innerHTML = `
        <h3>QR CODE</h3>
        <p>سيتم إنشاء الكود هنا لاحقاً</p>
    `;
}

function scanRoom() {
    statusText.innerText = "الحالة: جاهز لمسح الكود";

    startCamera();
}

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        camera.srcObject = stream;
        statusText.innerText = "الحالة: الكاميرا تعمل";
        
    } catch (error) {
        statusText.innerText = "لم يتم السماح بالكاميرا";
        console.log(error);
    }
}
