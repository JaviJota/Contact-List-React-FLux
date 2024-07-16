const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [{a:3},{a:4},{a:5}],
	  },
	  actions: {
		createUserAgenda: async (user) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}`,
			  {
				method: "POST",
				headers: {
				  accept: "application/json",
				},
			  }
			);
			if (!resp.ok) throw new Error("Error creating new agenda");
			const data = await resp.json();
			alert("Agenda created! Log in to add contacts.");
		  } catch (error) {
			alert("Error creating new agenda", error);
		  }
		},
		getAgenda: async (user) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}`
			);
			if (!resp.ok) throw new Error("Error retrieving agenda");
			const data = await resp.json();
			setStore({ contacts: data });
		  } catch (error) {
			alert("Error retrieving agenda", error);
		  }
		},
		createContact: async (user, newUserData) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}/contacts`,
			  {
				method: "POST",
				headers: {
				  accept: "application/json",
				  "Content-type": "application/json",
				},
				body: JSON.stringify({
				  name: newUserData.name,
				  phone: newUserData.phone,
				  email: newUserData.email,
				  address: newUserData.address,
				}),
			  }
			);
			if (!resp.ok) throw new Error("Error creating new contact");
			const data = await resp.json();
			alert("Contact succesfully created!");
			// getAgenda(user);
			// setForm;
		  } catch (error) {
			alert("Error creating new contact", error);
		  }
		},
		editContact: async (user, id) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`,
			  {
				method: "PUT",
				headers: {
				  accept: "application/json",
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({
				  name: userData.name,
				  phone: userData.phone,
				  email: userData.email,
				  address: userData.address,
				}),
			  }
			);
			if (!resp.ok) throw new Error("Error updating contact");
			const data = await resp.json();
			alert("Updated contact");
		  } catch (error) {
			alert("Error updating contact", error);
		  }
		},
		deleteAgenda: async (user) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}`,
			  {
				method: "DELETE",
				headers: {
				  accept: "application/json",
				},
			  }
			);
			if (!resp.ok) throw new Error("Error deleting agenda");
			const data = await resp.json();
			alert("Agenda deleted");
		  } catch (error) {
			alert("Error deleting agenda", error);
		  }
		},
		deleteContact: async (user, id) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`,
			  {
				method: "DELETE",
				headers: {
				  accept: "application/json",
				},
			  }
			);
			if (!resp.ok) throw new Error("Error deleting contact");
			const data = await resp.json();
			alert("Contact deleted succesfully");
		  } catch (error) {
			alert("Error deleting contact", error);
		  }
		},
	  },
	};
  };
  
  export default getState;