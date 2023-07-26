import React from "react";
import './BorrowedList.css';

const BorrowedList = () => {
    return (
        <div className="table-parent-div">
            <div className="table-heading">
                <p>Borrowed Information</p>
            </div>
            <div className="table-data">
                <table>
                    <tr>
                        <th>Creditor</th>
                        <th>Amount</th>
                        <th>Interest</th>
                        <th>Date of Issued</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                    <tr>
                        <td>Vengadasalam</td>
                        <td>₹ 10000</td>
                        <td>2</td>
                        <td>01 Jun 2023</td>
                        <td>Tamil date vaikaasi 18</td>
                        <td>01 Jun 2024</td>
                    </tr>
                    <tr>
                        <td>Sinthamani</td>
                        <td>₹ 50000</td>
                        <td>1.5</td>
                        <td>25 Jan 2023</td>
                        <td>Tamil date thai 11</td>
                        <td>01 Jun 2024</td>
                    </tr>
                    <tr>
                        <td>Palanisamy BNP</td>
                        <td>₹ 10000</td>
                        <td>2</td>
                        <td>22 Nov 2022</td>
                        <td>Tamil date karthikai 6</td>
                        <td>22 Nov 2023</td>
                    </tr>
                    <tr>
                        <td>Lakshmi Amma</td>
                        <td>₹ 10000</td>
                        <td>2</td>
                        <td>28 Oct 2022</td>
                        <td>Tamil date aippasi 11</td>
                        <td>28 Oct 2023</td>
                    </tr>
                </table>
            </div>
        </div>
    );

}

export default BorrowedList;