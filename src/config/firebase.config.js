
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDO-xLQpn6Gb2FLcNdGUVg7Jd-6vh6qg_Y",
  authDomain: "emckart-c5335.firebaseapp.com",
  projectId: "emckart-c5335",
  storageBucket: "emckart-c5335.appspot.com",
  messagingSenderId: "290967270943",
  appId: "1:290967270943:web:1f041b82ecf02c101b472a",
  measurementId: "G-NBQ16E4K5K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firebasStorage = getStorage(app)

export default app