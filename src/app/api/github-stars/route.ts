export async function GET(req: Request) {
  const githubToken = process.env.GITHUB_TOKEN;
  
  // If no token is provided, return a default response
  if (!githubToken) {
    return Response.json({ 
      stars: 42, // Default fallback value
      message: 'GitHub token not configured' 
    });
  }

  try {
    const res = await fetch('https://api.github.com/repos/toukoum/portfolio', {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        'User-Agent': 'Portfolio-App',
      },
    });

    if (!res.ok) {
      // Return fallback data instead of error
      return Response.json({ 
        stars: 42,
        message: `GitHub API error: ${res.status}` 
      });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count });
  } catch (error) {
    // Handle network errors gracefully
    return Response.json({ 
      stars: 42,
      message: 'Failed to fetch GitHub data' 
    });
  }
}