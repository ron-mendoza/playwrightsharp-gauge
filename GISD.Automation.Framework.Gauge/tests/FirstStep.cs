using FluentAssertions;
using Gauge.CSharp.Lib.Attribute;
using PlaywrightSharp;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GISD.Automation.Framework.Gauge.tests
{
    public class FirstStep
    {
        public const string email = "ron_test@gmail.com";
        public const string password = "MMrt3415";

        [Step("test muna")]
        public void TestMun()
        {

        }

        [Step("Launch web browser")]
        public async Task Launch()
        {
            using var playwright = await Playwright.CreateAsync();

            await using var browser = await playwright.Chromium.LaunchAsync(headless: false);

            var context = await browser.NewContextAsync();
            var page = await context.NewPageAsync();

            // Log and continue all network requests
            await page.RouteAsync("**", (route, _) =>
            {
                Console.WriteLine(route.Request.Url);
                route.ContinueAsync();
            });

            await page.GoToAsync("http://todomvc.com");
        }

        private async Task LaunchWebBrowser()
        {

            using var playwright = await Playwright.CreateAsync();

            await using var browser = await playwright.Chromium.LaunchAsync(headless: false);

            var context = await browser.NewContextAsync();
            var page = await context.NewPageAsync();

            // Log and continue all network requests
            await page.RouteAsync("**", (route, _) =>
            {
                Console.WriteLine(route.Request.Url);
                route.ContinueAsync();
            });

            await page.GoToAsync("http://todomvc.com");

             
        }
    }
}
