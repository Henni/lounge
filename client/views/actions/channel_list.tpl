<table style="width:100%">
	<thead>
		<tr>
			<th>Channel</th>
			<th>Users</th>
			<th>Topic</th>
		</tr>
	</thead>
	<tbody>
		{{#each channels}}
			<tr>
				<td>{{parse channel}}</td>
				<td>{{num_users}}</td>
				<td>{{parse topic}}</td>
			</tr>
		{{/each}}
	</tbody>
</table>
