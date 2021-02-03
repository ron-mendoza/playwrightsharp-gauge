
using PlaywrightSharp;
using System;
using System.Threading.Tasks;

namespace GISD.Automation.Framework.Core
{
    public class AutomationCore
    {
        public async Task<bool> Run()
        {
            using var playwright = await Playwright.CreateAsync();
            await using var browser = await playwright.Chromium.LaunchAsync();
            var page = await browser.NewPageAsync();
            await page.GoToAsync("http://www.bing.com");
            
            //await page.ScreenshotAsync(path: outputFile);

            return await Task.FromResult(true);
        }
    }
}
