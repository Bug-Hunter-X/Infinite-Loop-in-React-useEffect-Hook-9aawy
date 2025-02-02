# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook.  The code creates an infinite loop because the `count` state variable is updated within the `useEffect` function, which causes the effect to re-run continuously. This leads to the application crashing or becoming unresponsive.

## Bug Description
The `useEffect` hook is improperly used.  The dependency array `[count]` causes a re-render every time `count` is updated. This leads to a situation where `setCount(count + 1)` is called repeatedly and never stops.

## Solution
The solution involves restructuring the `useEffect` to prevent the infinite loop.