/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

export const HtsGetListCategories = ({ event }) => {
	// <SimplePopover codigo = {id}/>
	// console.log("PERRO DEL PERRO");
	// console.log(event);

	return (
		<>
			<TableRow>
				<TableCell>
					<ul>
						<li>
							<h4>{event.L0}</h4>
						</li>
						<br />
						<li>
							{' '}
							<h4>{event.L1} </h4>
						</li>
						<br />
						<li>
							{' '}
							<h4>{event.L2} </h4>
						</li>
						<br />
						<li>
							{' '}
							<h4>{event.L3} </h4>
						</li>
						<br />
					</ul>
				</TableCell>
			</TableRow>
		</>
	);
};
