// utils/fetchUser.ts

export async function fetchApiData(url: string, metadataId: string) {
    const apiURL = url.endsWith('/') ? url : url + '/';
  
    try {
      const res = await fetch(apiURL + metadataId);
  
      if (!res.ok) {
        throw new Error(`API returned status ${res.status}`);
      }
  
      const user = await res.json();
      return user;
  
    } catch (error) {
      const errorMsg = `Error fetching API: ${(error as Error).message}`;
      return { errorMsg };
    }
  }
  