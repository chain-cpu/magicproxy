import { Router } from 'express';
import axios from 'axios'

const router = Router();

router.all('/', (req, res) => {
  const url = req.body.targeturl;
  console.log("request arrived : " + url);
  return res.status(200).send({msg:"received", url: url});
});


export default router;
