export async function postRequest(API_URL, enteredValues) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(enteredValues),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send borrow data");
  }

  const resData = await response.json();
  return resData;
}

export async function getRequest(API_URL) {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch borrow data");
  }

  const resData = await response.json();
  return resData;
}

export async function putRequest(API_URL, rowData) {
  const response = await fetch(API_URL + "/" + rowData.id, {
    method: "PUT",
    body: JSON.stringify(rowData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update borrow data");
  }

  const resData = await response.json();
  return resData;
}

export async function deleteRequest(API_URL, selectedRowIds) {
  const response = await fetch(API_URL + "/" + selectedRowIds, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete borrow data");
  }

  const resData = await response.json();
  return resData;
}
