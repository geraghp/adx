import express from 'express'
import WellKnown from './well-known.js'
import ID from './id.js'
import Data from './data/index.js'
import Indexer from './indexer/index.js'
import DidNetwork from './did-network/index.js'

const router = express.Router()

router.use('/.well-known', WellKnown)
router.use('/id', ID)
router.use('/data', Data)
router.use('/indexer', Indexer)
router.use('/did-network', DidNetwork)

export default router
