import { test, expect } from '@playwright/test';

test.describe('Daily Check-In Flow', () => {
  test('should complete a full check-in flow', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://localhost:3000');
    
    // Wait for the app to load
    await expect(page.locator('text=🌟 Daily Check-In')).toBeVisible();
    
    // Select a mood
    await page.click('text=😀');
    await expect(page.locator('text=Happy')).toBeVisible();
    
    // Adjust energy level
    await page.locator('input[type="range"]').fill('8');
    
    // Add notes
    await page.fill('textarea', 'Feeling great today! Had a productive morning.');
    
    // Submit the check-in
    await page.click('text=Get Wellness Tips');
    
    // Wait for response
    await expect(page.locator('text=Your Daily Wellness Tips')).toBeVisible();
    await expect(page.locator('text=💡')).toBeVisible();
    
    // Verify suggestions are displayed
    const suggestions = page.locator('text=•');
    await expect(suggestions).toHaveCount(1);
    
    // Start a new check-in
    await page.click('text=Start New Check-In');
    await expect(page.locator('text=🌟 Daily Check-In')).toBeVisible();
  });

  test('should handle validation errors', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Try to submit without selecting mood
    await page.click('text=Get Wellness Tips');
    
    // Should show validation error
    await expect(page.locator('text=Please select your mood')).toBeVisible();
  });

  test('should handle different mood selections', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    const moods = ['😀', '😐', '😔', '😤'];
    
    for (const mood of moods) {
      await page.click(`text=${mood}`);
      await page.click('text=Get Wellness Tips');
      
      await expect(page.locator('text=Your Daily Wellness Tips')).toBeVisible();
      
      await page.click('text=Start New Check-In');
    }
  });

  test('should handle energy level changes', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Select mood first
    await page.click('text=😀');
    
    // Test different energy levels
    const energyLevels = [1, 5, 10];
    
    for (const energy of energyLevels) {
      await page.locator('input[type="range"]').fill(energy.toString());
      await page.click('text=Get Wellness Tips');
      
      await expect(page.locator('text=Your Daily Wellness Tips')).toBeVisible();
      
      await page.click('text=Start New Check-In');
      await page.click('text=😀'); // Re-select mood for next iteration
    }
  });
}); 