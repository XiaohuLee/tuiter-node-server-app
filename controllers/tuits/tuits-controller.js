import * as tuitsDao from './tuits-dao.js'
import mongoose from "mongoose"

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.image = "nasa.jpg";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = mongoose.Types.ObjectId(req.params.tid);
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = mongoose.Types.ObjectId(req.params.tid);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);//is _id number or string?
    res.sendStatus(status);
}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
