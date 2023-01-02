import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import formatDate from "../../../utils/FormatDate";
import Spinner from "../../common/Spinner/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movementsTransactions.scss";
import MovementsFilter from "./MovementsFilter";

const MovementsTransactions = () => {
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("showAll");
	const [page, setPage] = useState(1);
	const { getUserTransactions, userTransactions, nextPage } =
		useContext(AuthContext);

	let transactions;
	console.log(nextPage);
	// const [transactions, setTransactions] = useState()
	useEffect(() => {
		getUserTransactions(page);
		setTimeout(() => {
			setLoading(false);
		}, 900);
	}, [page]);

	const setNewPage = (page) => {
		setPage(page);
	};

	switch (filter) {
		case "incomes":
			transactions = userTransactions.filter(
				(elm) => elm.type === "topup"
			);
			break;
		case "outcomes":
			transactions = userTransactions.filter(
				(elm) => elm.type !== "topup"
			);
			break;

		case "showAll":
			transactions = userTransactions;
			break;
	}

	const transactionElements = transactions?.map((el) => (
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

	return (
		<div className="transactionsContainer">
			<div className="transactionsTitleContainer">
				<h3 className="transactionTitle">
					Check your last transactions
				</h3>
				<MovementsFilter setFilter={setFilter} />
			</div>
			<span className="transactionPage">Page: {page}</span>
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

			<div className="paginateContainer">
				{page >= 1 && (
					<button
						onClick={() => setNewPage(1)}
						className="paginateButton"
					>
						1
					</button>
				)}
				{page >= 1 && (
					<button
						onClick={() => setNewPage(2)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						2
					</button>
				)}
				{page >= 2 && (
					<button
						onClick={() => setNewPage(3)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						3
					</button>
				)}
				{page >= 3 && (
					<button
						onClick={() => setNewPage(4)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						4
					</button>
				)}
				{page >= 4 && (
					<button
						onClick={() => setNewPage(5)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						5
					</button>
				)}
				{page >= 5 && (
					<button
						onClick={() => setNewPage(6)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						6
					</button>
				)}
				{page >= 6 && (
					<button
						onClick={() => setNewPage(7)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						7
					</button>
				)}
				{page >= 7 && (
					<button
						onClick={() => setNewPage(8)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						8
					</button>
				)}
				{page >= 8 && (
					<button
						onClick={() => setNewPage(9)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						9
					</button>
				)}
				{page >= 9 && (
					<button
						onClick={() => setNewPage(10)}
						className={
							nextPage
								? "paginateButton"
								: "paginateButton disabled"
						}
						disabled={!nextPage && true}
					>
						10
					</button>
				)}
			</div>
		</div>
	);
};

export default MovementsTransactions;
