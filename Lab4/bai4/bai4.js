let newWindow;

function mocuasomoi() {
  if (!newWindow || newWindow.closed) {
    let width, height;
    if (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode == true) {
      width = 100;
      height = 100;
    } else {
      width = 150;
      height = 150;
    }
    newWindow = window.open("", "_blank", `toolbar=yes,menubar=yes,width=${width},height=${height}`);
  } else {
    alert("Cửa sổ mới đã được mở trước đó.");
  }
}

function dongcuasomoi() {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    newWindow = null;
  } else {
    alert("Không có cửa sổ mới nào được mở.");
  }
}

function kiemtracuasodaduocdongchua() {
  if (newWindow && newWindow.closed) {
    alert("Cửa sổ mới đã được đóng.");
  } else {
    alert("Cửa sổ mới vẫn đang mở hoặc chưa được mở.");
  }
}