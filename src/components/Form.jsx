import React, { useState } from 'react';
import '../styles/form.css';
import { TbGrave2 } from 'react-icons/tb';
import { FiUser } from 'react-icons/fi';
import { GoInbox } from 'react-icons/go';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        receiptNumber: '',
        transactionId: '',
        amount: '',
        datePaid: '',
        paymentType: '',
        payer: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleCancel = () => {
        console.log('Form canceled');
    };

    return (
        <div className="conent-make">
            <span>
                <div className="sidebar">
                    <h1 className="payment-heading">Create Payment</h1>
                    <div className="section">
                        <div className="info">
                            <p>Grave Site</p>
                            <span className='align-sidecontent'>
                                <TbGrave2 />
                                <span> 01-1001-05.0</span>
                            </span>
                        </div>
                    </div>

                    <div className="section">
                        <div className="info">
                            <p>Owner</p>
                            <span className='align-sidecontent'>
                                <FiUser />
                                <span> Lorraine & Russ Stewart</span>
                            </span>
                        </div>
                    </div>

                    <div className="section">
                        <div className="info">
                            <p>Person Buried</p>
                            <span className='align-sidecontent'>
                                <GoInbox />
                                <span> Edgar Steward</span>
                            </span>
                        </div>
                    </div>
                </div>
            </span>
            <span>
                <div className="payment-form">
                    <h2 className="form-title">Payment Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="first-field">
                            <div className="form-group">
                                <label htmlFor="receiptNumber">Receipt Number</label>
                                <input
                                    type="number"
                                    id="receiptNumber"
                                    name="receiptNumber"
                                    value={formData.receiptNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="transactionId">Transaction ID</label>
                                <input
                                    type="text"
                                    id="transactionId"
                                    name="transactionId"
                                    value={formData.transactionId}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="second-field">
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="datePaid">Date Paid</label>
                                <input
                                    type="date"
                                    id="datePaid"
                                    name="datePaid"
                                    value={formData.datePaid}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="third-field">
                            <div className="form-group">
                                <label htmlFor="paymentType">Payment Type</label>
                                <select
                                    id="paymentType"
                                    name="paymentType"
                                    className='paymentTyp'
                                    value={formData.paymentType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Payment Type</option>
                                    <option value="credit_card">Credit Card</option>
                                    <option value="bank_transfer">Bank Transfer</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="payer">Payor</label>
                                <input
                                    type="text"
                                    id="payer"
                                    name="payer"
                                    value={formData.payer}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="descipt-center">
                                <label className="label-desci" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className='textare-height'
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="form-group">
                            <div className="button-group">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </span>
        </div>
    );
};

export default PaymentForm;
