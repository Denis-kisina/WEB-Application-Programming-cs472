package edu.miu.cs.cs472.lesson12.filters;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(filterName = "HitCountFilter", dispatcherTypes = {DispatcherType.REQUEST, DispatcherType.FORWARD}, urlPatterns = {"/", "/*"})
public class HitCountFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        System.out.println("Request intercepted by HitCountFIlter");
        Integer totalHitCount = (Integer) req.getServletContext().getAttribute("totalHitCount");
        totalHitCount++;
        req.getServletContext().setAttribute("totalHitCount", totalHitCount);
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        System.out.println("HitCountFilter is initializing" + config.getFilterName());
        int totalHitCount = 0;
        config.getServletContext().setAttribute("totalHitCount", totalHitCount);
    }

}
