import React from "react";
import MovementsTitleComponent from "../../components/pages/Movements/MovementsTitleComponent";
import MovementsTransactions from "../../components/pages/Movements/MovementsTransactions";
import "./Movements.scss";

const Movements = () => {
	return (
		<div className="sendMoney">
			<div className="container">
				{/* Title Component */}
				<MovementsTitleComponent />

				{/* Transactions Component */}
				<MovementsTransactions />
				{/* Filtrado component */}
			</div>
		</div>
	);
};

export default Movements;
