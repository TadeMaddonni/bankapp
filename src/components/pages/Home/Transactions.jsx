import React, { useContext, useEffect, useState, useTransition } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import formatDate from "../../../utils/FormatDate";
import Spinner from "../../common/Spinner/Spinner";
import "./transactions.scss";

const Transactions = () => {
	const [loading, setLoading] = useState(true);
	const { getUserTransactions, userTransactions } = useContext(AuthContext);
	console.log(userTransactions);
	// const [transactions, setTransactions] = useState()
	useEffect(() => {
		getUserTransactions();
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const transactionElements = userTransactions?.slice(0, 5).map((el) => (
		<div key={el.id} className="transaction">
			<div className="left">
				<img
					src="https://i.postimg.cc/c421df0y/Group-1.png"
					alt=""
					className="transactionIcon"
				/>
				<div>
					<p className="transactionDesc">{el.concept}</p>
					<span className="transactionDate">
						{formatDate(el.date).tipo2}
					</span>
				</div>
			</div>
			<span
				className={
					el.type === "topup" ? "amount added" : "amount spent"
				}
			>
				{el.type === "topup" ? `+ ${el.amount}` : `- ${el.amount}`}
			</span>
		</div>
	));
	// {el.type === "topup" ? "amount added" : "amount spent"}
	return (
		<div className="transactionsContainer">
			<h3 className="transactionTitle">Transactions</h3>
			<div className="transactionContainer">
				{loading ? (
					<Spinner />
				) : userTransactions?.length === 0 ? (
					<h2 className="noTransactions">
						You don't have recent transactions.
					</h2>
				) : (
					transactionElements
				)}
			</div>
		</div>
	);
};

export default Transactions;
