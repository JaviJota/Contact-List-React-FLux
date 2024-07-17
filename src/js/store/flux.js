const getState = ({ setStore }) => {
	return {
	  store: {
		contacts: [],
		username: '',
		userImageUrl: 'https://images.ecestaticos.com/Dej1imj4NpydN0_cq5dtE1UVvVA=/0x0:848x743/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F063%2F10d%2F720%2F06310d720fa27706776beb45e86c4ebe.jpg'
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
			await resp.json();
			return true
		  } catch (error) {
			alert("Error creating new agenda");
		  }
		},
		getAgenda: async (user) => {
		  try {
			const resp = await fetch(
			  `https://playground.4geeks.com/contact/agendas/${user}/contacts`
			);
			if (!resp.ok) throw new Error("Error retrieving agenda");
			const data = await resp.json();
			setStore({ contacts: data.contacts });
		  } catch (error) {
			alert("Error retrieving agenda");
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
			await resp.json();
			alert("Contact succesfully created!");
		  } catch (error) {
			alert("Error creating new contact");
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
			await resp.json();
			alert("Updated contact");
		  } catch (error) {
			alert("Error updating contact");
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
			await resp.json();
			alert("Agenda deleted");
		  } catch (error) {
			alert("Error deleting agenda");
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
			await resp.json();
			alert("Contact deleted succesfully");
		  } catch (error) {
			alert("Error deleting contact", error);
		  }
		},
	  },
	};
  };
  
  export default getState;