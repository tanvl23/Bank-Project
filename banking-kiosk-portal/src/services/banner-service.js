console.log("Loaded API URL:", process.env.REACT_APP_MASTER_API); // Debugging log for API URL

const URL = process.env.REACT_APP_MASTER_API; // Default to local backend if env variable is missing

export const logBannerClick = async () => {
  try {
    const response = await fetch(`${URL}/log-banner-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to log banner click: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging banner click:", error);
    return null;
  }
};
