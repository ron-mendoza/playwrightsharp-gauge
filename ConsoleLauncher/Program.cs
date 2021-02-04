using GISD.Automation.Framework.Core;
using PlaywrightSharp;
using System;
using System.Threading.Tasks;

namespace ConsoleLauncher
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var playwright = await Playwright.CreateAsync();
            
            await using var browser = await playwright.Chromium.LaunchAsync(headless: false);
           
            var context = await browser.NewContextAsync();
            var page = await context.NewPageAsync();
            
            // Log and continue all network requests
            // await page.RouteAsync("**", (route, _) =>
            // {
            //     Console.WriteLine(route.Request.Url);
            //     route.ContinueAsync();
            // });

            await page.GoToAsync("http://todomvc.com");
        }
    }
}
