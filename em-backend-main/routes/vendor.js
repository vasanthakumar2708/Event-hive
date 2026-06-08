const express = require('express');
const router = express.Router();


const newVendor = require('../controller/vendor/newVendor')
const loginVendor = require('../controller/vendor/loginVendor')
const getVendorList = require('../controller/vendor/getVendorList')
const getVendorDetails = require('../controller/vendor/getVendorDetails')
const updatePhasedata = require('../controller/vendor/updatePhasedata')
const getEventListForVendorPage = require('../controller/vendor/getEventListForVendorPage')
const uploadfile = require('../controller/vendor/uploadfile');
const updatefilename = require('../controller/vendor/updatefilename');
const updatebill = require('../controller/vendor/updatebill');
const downloadfile = require('../controller/vendor/downloadfile');

const addreqtable = require('../controller/vendor/addreqtable');
const givequatation = require('../controller/vendor/giveQuation');
const update_payment_transaction = require('../controller/vendor/updatetransacation');

const upload = require('./../multer')
const bodyParser = require('body-parser');


router.post('/upload',upload.single('file'),uploadfile);
router.get('/download/:filename',downloadfile);

router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));


router.post('/newvendor',newVendor);
router.post('/loginvendor',loginVendor);
router.post('/getVendorList',getVendorList);
router.post('/getVendorDetails',getVendorDetails);
router.post('/updatePhasedata',updatePhasedata);
router.post('/updatefilename',updatefilename);
router.get('/getEventListForVendorPage',getEventListForVendorPage);
router.post('/updatebill',updatebill);
router.post('/update_payment_transaction',update_payment_transaction);

router.post('/addreqtable',addreqtable);
router.post('/giverequirementquatation',givequatation);














module.exports = router;