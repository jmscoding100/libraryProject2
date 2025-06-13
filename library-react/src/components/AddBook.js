import { useState, useEffect} from 'react'
import axios from 'axios'


const AddBook =()=>{


    return(
        <>
            <main className="add-book" id="addBooks">
                <div className="container">
                    <form className="book-form" id="bookForm">
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Book Title:</label>
                                <input id="title" type="text" className="form-control" name="title" />
                            </div>
                            <div className="col">
                                <label htmlFor="author" className="form-label">Author:(Last, Frist)</label>
                                <input id="author" type="text" className="form-control" name="author" />
                            </div>
                            <div className="col">
                                <label htmlFor="publishingCompany" className="form-label">Publishing Company:</label>
                                <input id="publishingCompany" type="text" className="form-control" name="publishing_company" />
                            </div>
                            <div className="col">
                                <label htmlFor="copyrightYear" className="form-label">Copyright Year:</label>
                                <input id="copyrightYear" type="number" min="1900" max="2050" step="1" className="form-control" name="copyright_year" />
                            </div>
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Edition:</label>
                                <input id="eidtion" type="number" min="1" max="100" step="1" className="form-control" name="edition" />
                            </div>
                            <div className="col">
                                <label htmlFor="editionYear" className="form-label">Edition Year:</label>
                                <input id="eidtionYear" type="number" min="1900" max="2050" step="1" className="form-control" name="edition_year" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="language" className="form-label">Language:</label>
                                <input id="language" type="text" className="form-control" name="language" />
                            </div>
                            <div className="col">
                                <label htmlFor="numOfPages" className="form-label">Number of Pages:</label>
                                <input id="numOfPages" type="number" min="1" max="100" step="1" className="form-control" name="num_pages" />
                            </div>
                            <div className="col">
                                <label htmlFor="qty" className="form-label">Quantity:</label>
                                <input id="qty" type="number" min="1" max="30" step="1" className="form-control" name="qty" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="rating-box">
                                    <p className="form-text">Rating:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Primary" id="primaryRating" />
                                        <label className="form-check-label" htmlFor="primaryRating">Primary</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Juvenile" id="juvenileRating" />
                                        <label className="form-check-label" htmlFor="juvenileRating">Juvenile</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Pre-adolescent" id="pre-AdolescentRating" />
                                        <label className="form-check-label" htmlFor="pre-AdolescentRating">Pre-adolescent</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Adolescent" id="adolescentRating" />
                                        <label className="form-check-label" htmlFor="adolescentRating">Adolescent</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Adult" id="adultRating" />
                                        <label className="form-check-label" htmlFor="adultRating">Adult</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="format-box">
                                    <p className="form-text">Format:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="physical" id="physicalFormat" />
                                        <label className="form-check-label" htmlFor="physicalFormat">Physical</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="video" id="videoFormat" />
                                        <label className="form-check-label" htmlFor="videoFormat">Video</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="audio" id="audioFormat" />
                                        <label className="form-check-label" htmlFor="audioFormat">Audio</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="dital" id="ditalFormat" />
                                        <label className="form-check-label" htmlFor="ditalFormat">Dital</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <p className="form-text">Binding:(if physical)</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="paperback" id="bindingFormat" />
                                        <label className="form-check-label" htmlFor="bindingFormat">Paperback</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="fomat" defaultValue="hardback" id="bindingFormat" />
                                        <label className="form-check-label" htmlFor="bindingFormat">Hardback</label>
                                    </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'>Cover Image</span>
                                    <input className='form-control' name='cover_image' />
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <button className='btn btn-dark'>Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default AddBook