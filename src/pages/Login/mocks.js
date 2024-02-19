import { rest } from 'msw';  
  
export const handlers = [  
  rest.post('/api/login', (req, res, ctx) => {  
    const { username, password } = req.body;  
    if (username === '123' && password === '123') {  
      return res(ctx.json({ token: 'fake-token', user: { username: '123' } }));  
    }  
    return res(ctx.status(401), ctx.json({ error: 'Invalid credentials' }));  
  }),  
];