import multer from "multer";

const storage = multer.diskStorage({}); // use default tmp directory
const upload = multer({ storage });

export default upload;
