function downloadFile() {
    const cvUrl = "cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  