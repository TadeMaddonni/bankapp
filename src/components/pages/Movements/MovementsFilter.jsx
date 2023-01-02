import React from "react";
import "./movementsFilter.scss";
const MovementsFilter = ({ setFilter }) => {
	const setFilterValue = (e) => {
		const { value } = e.target;
		console.log(value);
		setFilter(value);
	};
	return (
		<div className="filterContainer">
			<div class="dropdown">
				<a
					class="btn btn-secondary dropdown-toggle btnDropdown"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Filter
				</a>

				<ul class="dropdown-menu">
					<li>
						<button
							class="dropdown-item dropdownItem"
							href="#"
							value="outcomes"
							onClick={(e) => setFilterValue(e)}
						>
							outcomes
						</button>
					</li>
					<li>
						<button
							class="dropdown-item dropdownItem"
							href="#"
							value="incomes"
							onClick={(e) => setFilterValue(e)}
						>
							Incomes
						</button>
					</li>
					<li>
						<button
							class="dropdown-item dropdownItem"
							href="#"
							value="showAll"
							onClick={(e) => setFilterValue(e)}
						>
							Show All
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MovementsFilter;
