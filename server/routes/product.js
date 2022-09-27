const express = require ('express')
const router = express.Router()

const {create, productById, read, remove, update, list, listRelated, listCategories, listBySearch, photo} = require ("../../controllers/product")
const {requireSignin, isAuth, isAdmin } = require ('../../controllers/auth');
const {userById} = require ('../../controllers/user');



router.get('/product/:productId', read)
router.get('/products', list)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.get('/products/photo/:productId', photo)

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create)
router.post("/products/by/search", listBySearch);


router.put( 'product/:productId/:userId', requireSignin, isAuth, isAdmin, update)

router.delete( 'product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)


router.param ('userId', userById)
router.param ('productId', productById)
module.exports = router