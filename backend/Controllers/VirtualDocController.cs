using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
  [Route("[controller]s")]
  [ApiController]
  public class VirtualDocController : ControllerBase
  {
    private readonly BackendContext _context;

    public VirtualDocController(BackendContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<VirtualDoc>>> Getvirtual_docs()
    {
      return await _context.virtual_docs.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<VirtualDoc>> GetVirtualDoc(int id)
    {
      var virtualDoc = await _context.virtual_docs.FindAsync(id);

      if (virtualDoc == null)
      {
        return NotFound();
      }

      return virtualDoc;
    }

    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutVirtualDoc(int id, VirtualDoc virtualDoc)
    {
      if (id != virtualDoc.id)
      {
        return BadRequest();
      }

      _context.Entry(virtualDoc).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!VirtualDocExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<VirtualDoc>> PostVirtualDoc(VirtualDoc virtualDoc)
    {
      _context.virtual_docs.Add(virtualDoc);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetVirtualDoc", new { id = virtualDoc.id }, virtualDoc);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<VirtualDoc>> DeleteVirtualDoc(int id)
    {
      var virtualDoc = await _context.virtual_docs.FindAsync(id);
      if (virtualDoc == null)
      {
        return NotFound();
      }

      _context.virtual_docs.Remove(virtualDoc);
      await _context.SaveChangesAsync();

      return virtualDoc;
    }

    private bool VirtualDocExists(int id)
    {
      return _context.virtual_docs.Any(e => e.id == id);
    }
  }
}
